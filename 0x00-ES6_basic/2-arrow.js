export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNewNeighbourhood = (newNeighbourhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighbourhood);
    return self.sanFranciscoNeighborhoods;
  };
}
