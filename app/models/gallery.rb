class Gallery < ApplicationRecord
  acts_as_votable
  acts_as_taggable_on :tags
  
  belongs_to :submitted_by, class_name: :User, foreign_key: :user_id
 
  has_many :exhibitions
  has_many :comments, as: :commentable

  
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates :name, :address, presence: true
  
end
