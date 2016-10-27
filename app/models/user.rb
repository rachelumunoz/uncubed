class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  acts_as_voter

  has_many :comments_added, class_name: :Comment
  has_many :submitted_galleries, class_name: :Gallery
  has_many :submitted_exhibitions, class_name: :Exhibition
  has_many :images
  validates :username, :email, :password, presence: true

  def gallery_comments
    Comment.where(user_id: self.id, commentable_type: "Gallery")
  end

  def exhibition_comments
    Comment.where(user_id: self.id, commentable_type: "Exhibition")
  end
end

