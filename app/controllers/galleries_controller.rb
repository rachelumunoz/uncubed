 class GalleriesController < ApplicationController
    before_action :set_gallery, only: [:show, :upvote, :downvote, :update, :add_tags]
  def index
    @galleries = Gallery.all
    # render component: 'Galleries', props: { galleries: @galleries }
  end

  def new
    @gallery = Gallery.new
  end

  def create
    @gallery = Gallery.new(gallery_params)
    @gallery.submitted_by = current_user
    respond_to do |format|
      if @gallery.save
        # @gallery.images.last.update(user: current_user)
        format.html {redirect_to root_path}
        # format.json { render :json => {:message => "Success"} }
         format.json { render json: @gallery, each_serializer: GallerySerializer}
      else
        format.html { render :new}
        format.json { render json: @gallery.errors, status: :unprocessable_entity }

      end
    end
  end

  def add_tags
    @gallery.tag_list.add(params[:gallery][:tag_list])
    if @gallery.save
      redirect_back fallback_location:  { action: "show", id: @gallery.id }
    else
       flash.now[:alert] =  @gallery.errors.full_messages
    end
  end

  def show
    @comments = @gallery.comments.order(created_at: :desc).limit(2)
    @comment = Comment.new
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
      params.require(:gallery).permit(:name, :address, :tags, images_attributes: :image)
    end

    def set_gallery
      @gallery = Gallery.find(params[:id])
    end
end
