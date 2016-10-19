class Exhibition < ApplicationRecord
  belongs_to :gallery
  acts_as_votable
  has_many :comments, as: :commentable
end
