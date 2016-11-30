class ImagesController < ApplicationController
  before_action :load_resource

  def index
   @images = @resource.images
  end

  def create
    # byebug
    
    # error if gallery didn't have images before adding
    add_images(images_params[:images])
    # flash[:error] = "Failed uploading images" unless @resource.save
    if @resource.save
      redirect_to @resource
    end
  end
  

  private
  def load_resource
    # byebug
    resource, id = request.path.split('/')[1,2]
    @resource = resource.singularize.classify.constantize.find(id)
  end
  
  def params_name
    request.path.split('/')[1].singularize
  end

  def images_params
    params.require(params_name).permit(:images)
  end

  def add_images(new_images)
    images = @resource.images # copy the old images 
    @resource.images = nil
    images.push(new_images) # concat old images with new ones
    @resource.images = images # concat old images with new ones
  end

end