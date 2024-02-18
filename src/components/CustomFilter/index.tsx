import Select from "react-select";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type OptionType = {
  label: string;
  value: string;
};

type FilterPropType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: FilterPropType) => {
  const [selected, setSelected] = useState<OptionType | null>(null);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const key = title === "Yakıt Tipi" ? "fuel_type" : "year";

    if (selected?.value) {
      params.set(key, selected.value);
    } else {
      params.delete(key);
    }
    setParams(params);
  }, [selected]);
  return (
    <div className="text-black w-fit">
      <Select
        onChange={(e) => setSelected(e)}
        className="min-w-[100px]"
        placeholder={title}
        options={options}
      />
    </div>
  );
};

export default CustomFilter;
