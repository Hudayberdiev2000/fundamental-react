import type {PostItemType} from "../../postItem.tsx";

interface Option {
    value: string;
    label: string;
}

interface MySelectProps {
    options: Option[]
    defaultValue: string
    onChange?: (value: keyof Omit<PostItemType, "id"> | "") => void
    value?: string
}

const MySelect = (props: MySelectProps) => {
    const { options, defaultValue, onChange, value } = props;
    return (
        <select value={value} onChange={event => onChange?.(event.target.value as keyof Omit<PostItemType, "id">)}>
            <option disabled value="">{defaultValue}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};

export default MySelect;