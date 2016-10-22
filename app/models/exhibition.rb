class Exhibition < ApplicationRecord
  acts_as_votable

  belongs_to :gallery
  belongs_to :submitted_by, class_name: :User, foreign_key: :user_id
  has_many :comments, as: :commentable
end
