class CreateClues < ActiveRecord::Migration[5.1]
  def change
    create_table :clues do |t|
      t.text :clue_text

      t.timestamps
    end
    add_index :clues, :clue_text
  end
end
