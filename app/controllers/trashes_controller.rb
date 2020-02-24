class TrashesController < ApplicationController
  def index
  end

  def show
    @trashes = Trash.all.order(name: :ASC, ).page(params[:page]).per(10)
  end

  
  def search
    
    @trashes = Trash.search(params[:keyword])
    # render json: @trashes      # jsonでレスポンスを返す
    respond_to do |format|
        format.html               #jsonで返せなかった時？htmlで返せる
        format.json
    end    
    # if @trashes != 0
    #   respond_to do |format|
    #     format.html 
    #     format.json
    #   end
    # else
    #   flash[:notice] = "該当するものがありませんでした。"
      
    # end
  end
  
  
end
