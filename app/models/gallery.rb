class Gallery < ApplicationRecord
  acts_as_votable
  acts_as_taggable_on :tags
  
  belongs_to :submitted_by, class_name: :User, foreign_key: :user_id
 
  has_many :exhibitions
  has_many :comments, as: :commentable

  has_many :photographs
  
  validates :name, :address, :user_id, presence: true
  
  def upvotes 
    self.get_upvotes.size
  end
end
