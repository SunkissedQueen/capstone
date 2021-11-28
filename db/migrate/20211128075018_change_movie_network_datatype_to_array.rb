class ChangeMovieNetworkDatatypeToArray < ActiveRecord::Migration[6.1]
  def change
    remove_column :movies, :network
    add_column :movies, :network, :string, array:true, default: []
  end
end
