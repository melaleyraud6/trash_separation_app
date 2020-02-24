class AddIndexToTrashes < ActiveRecord::Migration[5.2]
  def change
    add_index :trashes, :name, length: 50
  end
end
