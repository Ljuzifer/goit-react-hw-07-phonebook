import { useDispatch, useSelector } from 'react-redux';
import { searchFilter } from 'redux/filterSlice';
// import { fetchContacts } from 'redux/operations';
// import { searchFilter } from 'redux/actions';
import { selectFilter } from 'redux/selectors';
import { Search } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChangeFilter = newSymbol => {
    dispatch(searchFilter(newSymbol));
  };

  // console.log(fetchContacts);

  return (
    <Search>
      <input
        type="text"
        value={filter}
        onChange={e => onChangeFilter(e.target.value)}
        placeholder="Search..."
      />
    </Search>
  );
};
