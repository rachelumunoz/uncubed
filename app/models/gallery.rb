class Gallery < ApplicationRecord
  validates :name, :address, presence: true
  has_many :comments, as: :commentable
end
