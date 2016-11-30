 class GalleriesController < ApplicationController
    before_action :set_gallery, only: [:show, :upvote, :downvote, :update, :add_tags, :add_images]
  
  def index
    @galleries = Gallery.last(5)
    # render component: 'Galleries', props: { galleries: @galleries }
  end

  def new
    @gallery = Gallery.new
    respond_to do |format|
      format.js {render '_new', layout: false} 
      format.html
    end

  end

  def create
    @gallery = Gallery.new(gallery_params)
    @gallery.submitted_by = current_user
    byebug
    if @gallery.save
      render json: @gallery, each_serializer: GallerySerializer
    else
      render json: @gallery.errors, status: :unprocessable_entity
    end
  end

  # def add_tags
  #   @gallery.tag_list.add(params[:gallery][:tag_list])
  #   if @gallery.save
  #     redirect_back fallback_location:  { action: "show", id: @gallery.id }
  #   else
  #      flash.now[:alert] =  @gallery.errors.full_messages
  #   end
  # end

  def show
    @comments = @gallery.comments.order(created_at: :desc).limit(2)
    @comment = Comment.new
  end
  
  def upvote
    @gallery.upvote_by current_user
    render json: @gallery, each_serializer: GallerySerializer
  end

  def downvote
    @gallery.downvote_by current_user
    render json: @gallery, each_serializer: GallerySerializer
  end
  
  private
    def gallery_params
      params.require(:gallery).permit!
    end

    def set_gallery
      @gallery = Gallery.find(params[:id])
    end
end
