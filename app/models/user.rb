class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  validates :username, :email, :password, presence: true
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :comments_added, class_name: :Comment
  has_many :submitted_galleries, class_name: :Gallery

  def gallery_comments
    Comment.where(user_id: self.id, commentable_type: "Gallery")
  end

  def exhibition_comments
    Comment.where(user_id: self.id, commentable_type: "Exhibition")
  end
end

