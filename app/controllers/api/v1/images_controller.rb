class API::V1::ImagesController < ApplicationController
  before_action :load_resource

  def create
    byebug
    add_more_images(image_params[:images])
   # puts @resource.images
   # puts "========params=========="
   # puts image_params[:images]
   # @resource.images << image_params[:images]
    # assign back
  end
  
  private
  def load_resource
    resource, id = request.path.split('/')[3,4]
    @resource = resource.singularize.classify.constantize.find(id)
  end
  def find_type
    request.path.split('/')[3].singularize
  end

  def image_params
    params.require(find_type).permit(:images)
  end

  def add_more_images(new_images)
    images = @resource.images # copy the old images 
    images.push(new_images)# concat old images with new ones
  end
end
