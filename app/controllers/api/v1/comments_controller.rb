class API::V1::CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create]
  before_action :load_commentable

  def index
    @comments = @commentable.comments
  end

  def new
    @comment = @commentable.comments.new
    respond_to do |format|
      format.js {render 'new', layout: false} 
      format.html
    end
  end

  def create
    @comment = @commentable.comments.new(comment_params)
    @comment.user = current_user
    if @comment.save
      redirect_to @commentable, notice: "Review Created"
    else
      flash.now[:alert] =  @comment.errors.full_messages
      render :new
    end
  end

  # def upvote
  # end

  # def downvote
  # end

  private
  def load_commentable
    # byebug
    resource, id = request.path.split('/')[3,4]
    @commentable = resource.singularize.classify.constantize.find(id)
  end

  def comment_params
    params.require(:comment).permit(:content)
  end

end