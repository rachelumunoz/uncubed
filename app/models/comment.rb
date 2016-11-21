class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
  belongs_to :user
  
  acts_as_votable
  validates :content, presence: true

  def upvotes 
    self.get_upvotes.size - (self.get_downvotes.size)
  end
end
