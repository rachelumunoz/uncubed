 class GalleriesController < ApplicationController
    before_action :set_gallery, only: [:show, :upvote, :downvote]
  def index
    @galleries = Gallery.all
  end

  def new
    @gallery = Gallery.new
  end

  def create
    @gallery = Gallery.new(gallery_params)
    if @gallery.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @comments = @gallery.comments
  end

  def upvote
    @gallery.upvote_by current_user
    redirect_to :back
  end
  def downvote
    @gallery.downvote_by current_user
    redirect_to :back
  end
  private
    def gallery_params
      params.require(:gallery).permit(:name, :address, :image)
    end

    def set_gallery
      @gallery = Gallery.find(params[:id])
    end
end
