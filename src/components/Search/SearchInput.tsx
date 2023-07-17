import styles from "../../assets/scss/components/SearchInput.module.scss";

interface SearchInputProps {
  onQueryChange: (params: any) => any
}

const SearchInput = (props: SearchInputProps) => {

  return (
    <input
      type="text"
      className={styles.search}
      placeholder="What do you want to listen?"
      onChange={props.onQueryChange}
    />
  );
};

export default SearchInput;
