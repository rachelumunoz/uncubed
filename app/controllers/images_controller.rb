class ImagesController < ApplicationController
  before_action :load_resource

  def create
    byebug
    if @resource.images.length <= 0
      @resource.images = images_params
    else
      add_more_images(images_params[:images])
    end
    # multiple gallery only saves if try to save, but then spits out error
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

  def add_more_images(new_images)
    images = @resource.images # copy the old images 
    @resource.images = nil
    images.push(new_images) # concat old images with new ones
    @resource.images = images # concat old images with new ones
  end

end