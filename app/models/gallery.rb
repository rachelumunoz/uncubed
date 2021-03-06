class Gallery < ApplicationRecord
  acts_as_votable
  acts_as_taggable_on :tags
  
  belongs_to :submitted_by, class_name: :User, foreign_key: :user_id
 
  has_many :exhibitions
  has_many :comments, as: :commentable
  mount_uploaders :images, ImageUploader
  # has_many :images
  # accepts_nested_attributes_for :images
  validates :name, :address, presence: true
  # , :user_id
  def upvotes 
    self.get_upvotes.size - (self.get_downvotes.size)
  end
end
