class MediumcluesController < ApplicationController
  def index
    mediumclue = Mediumclue.all
    render json: mediumclue
  end

  def show
    mediumclue = Mediumclue.find(params[:id])
    render json: mediumclue
  end

  private

  def mediumclue_params
    params.require(:mediumclue).permit(:clue_text, :clue_answer, :clue_image_url, :clue_gallery, :forage_level)
  end
end
