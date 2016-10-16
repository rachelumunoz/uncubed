class CommentsController < ApplicationController
  before_action :load_commentable

  def index
    @comments = @commentable.comments
  end

  def new
    @comment = @commentable.comments.new
  end

  def create
    @comment = @commentable.comments.new(comment_params)
    @comment.user = current_user
    puts "=====coomment========="
      puts @comment.commentable
    if @comment.save
      redirect_to @commentable, notice: "Review Created"
    else
      flash.now[:alert] =  @commentable.errors.full_messages
      render :new
    end
  end

  def show

  end

  private
  def load_commentable
    resource, id = request.path.split('/')[1,2]
    @commentable = resource.singularize.classify.constantize.find(id)
  end
  
  def comment_params
    params.require(:comment).permit(:content)
  end
end
