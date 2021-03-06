describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('sorts array in ascending order', function(){
    expect( mergeSort([4,5,67,1,12,122,2,5,6]) ).toEqual( [1, 2, 4, 5, 5, 6, 12, 67, 122] );
  });
});

