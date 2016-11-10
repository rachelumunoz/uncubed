class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
  belongs_to :user
  
  acts_as_votable
  validates :content, presence: true
end
