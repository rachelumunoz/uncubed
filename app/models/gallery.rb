class Gallery < ApplicationRecord
  acts_as_votable
  has_many :comments, as: :commentable
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates :name, :address, presence: true
  belongs_to :submitted_user, class_name: :User, foreign_key: :user_id
end
