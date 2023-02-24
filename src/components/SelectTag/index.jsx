import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

function SelectTag(props) {
  const { placeholder, setTag } = props;
  const [inputValue, setInput] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/tags?keyword=${inputValue}`).then(res => {
      const newOption = res.data.tagList;

      setOptions(
        newOption.map(data => {
          return {
            id: data.tag_id,
            value: data.tag_name,
            label: data.tag_name,
          };
        })
      );
    });
  }, [inputValue]);

  const handleChange = value => {
    setTag(
      value.map(data => {
        if (data.id === undefined) {
          return { tag_name: data.value };
        } else {
          return { tag_id: data.id, tag_name: data.value };
        }
      })
    );
  };

  const onInputChange = value => {
    setInput(value);
  };

  return (
    <>
      <CreatableSelect
        isMulti
        onChange={handleChange}
        valueKey="value"
        options={options}
        placeholder={placeholder}
        onInputChange={onInputChange}
      />
    </>
  );
}

export default React.memo(SelectTag);
