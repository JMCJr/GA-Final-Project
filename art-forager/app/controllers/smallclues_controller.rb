class SmallcluesController < ApplicationController
  def index
    smallclue = Smallclue.all
    render json: smallclue
  end

  def show
    smallclue = Smallclue.find(params[:id])
    render json: smallclue
  end

  private

  def smallclue_params
    params.require(:smallclue).permit(:clue_text, :clue_answer, :clue_image_url, :clue_gallery, :forage_level)
  end
end
