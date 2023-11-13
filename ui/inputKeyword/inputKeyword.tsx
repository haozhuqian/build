import type { InputProps } from 'ant-design-vue';
import { defineComponent, toRefs, ref } from 'vue';
import { inputKeywordProps } from './types';
import { Input, Tag } from 'ant-design-vue';

const NAME = 'y-input-keyword';

export default defineComponent({
  name: NAME,
  props: inputKeywordProps,
  emits: ['update:keys'],
  setup(props, { emit }) {
    const { keys } = toRefs(props);
    const value = ref();
    const pressEnter: InputProps['onPressEnter'] = () => {
      const oldKeys = keys.value ? keys.value : [];
      emit('update:keys', [...oldKeys, value.value]);
      value.value = undefined;
    };
    const tagClose = (v: string) => {
      const newKeys = keys.value?.filter((i) => i !== v);
      emit('update:keys', newKeys);
    };
    return () => (
      <div>
        <Input
          v-model:value={value.value}
          onPressEnter={pressEnter}
          placeholder="回车添加关键词（关键词最多不超过5个）"
        ></Input>
        <div class="f-r-s-s-w">
          {keys.value &&
            keys.value.map((i) => {
              return (
                <Tag
                  class="mt-2!"
                  color="blue"
                  closable
                  onClose={() => tagClose(i)}
                >
                  {i}
                </Tag>
              );
            })}
        </div>
      </div>
    );
  },
});
