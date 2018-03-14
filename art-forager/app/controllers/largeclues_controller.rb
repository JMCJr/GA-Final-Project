class LargecluesController < ApplicationController
  def index
    largeclue = Largeclue.all
    render json: largeclue
  end

  def show
    largeclue = Largeclue.find(params[:id])
    render json: largeclue
  end

  private

  def largeclue_params
    params.require(:largeclue).permit(:clue_text, :clue_answer, :clue_image_url, :clue_gallery, :forage_level)
  end
end
  
