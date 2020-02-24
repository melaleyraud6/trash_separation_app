class Trash < ApplicationRecord
  def self.search(input)
    return nil if input == ""
    Trash.where(['name LIKE ?', "%#{input}%"])
  end

 
end

