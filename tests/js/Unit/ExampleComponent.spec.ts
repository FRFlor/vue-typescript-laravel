import {shallowMount, Wrapper} from '@vue/test-utils';
import ExampleComponent from '../../../resources/js/components/ExampleComponent.vue';

describe('ExampleComponent - Unit', () => {
    let wrapper: Wrapper<ExampleComponent>;

    const  mountWithName = (name: string) => {
        wrapper =  shallowMount(ExampleComponent, {
            propsData: {
                userName: name,
            }
        });
    };

    test('It renders a given user name', () => {
        mountWithName('Foobar');
        expect(wrapper.text()).toContain('Foobar');
    });

    test('It writes the given name backwards', () => {
        mountWithName('ABC');
        expect(wrapper.text()).toContain('CBA');
    });
});
