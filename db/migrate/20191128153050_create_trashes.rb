class CreateTrashes < ActiveRecord::Migration[5.2]
  def change
    create_table :trashes do |t|
      t.text  :name 
      t.text  :separation 
      t.text  :color_division
      t.timestamps
    end
  end
end
