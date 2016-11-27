class CommentSerializer < ActiveModel::Serializer
  attributes :content

  has_many :votes do
    object.upvotes
  end

end