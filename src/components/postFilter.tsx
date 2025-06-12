import type { PostFilterType } from "../App.tsx";
import MyInput from "./UI/input/myInput.tsx";
import MySelect from "./UI/select/mySelect.tsx";

interface PostFilterProps {
  filter: PostFilterType;
  setFilter: React.Dispatch<React.SetStateAction<PostFilterType>>;
}

const PostFilter = (props: PostFilterProps) => {
  const { filter, setFilter } = props;
  return (
    <div>
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <MySelect
        value={filter.sort}
        onChange={(value) => setFilter({ ...filter, sort: value })}
        options={[
          { value: "title", label: "Title" },
          { value: "body", label: "Body" },
        ]}
        defaultValue="Sort"
      />
    </div>
  );
};

export default PostFilter;
