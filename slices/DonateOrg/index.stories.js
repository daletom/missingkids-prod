import Slice from './';
import model from './model';
import mocks from './mocks.json';
import customMocks from './customMocks.json';
import SliceZone from 'vue-slicezone';

export default {
  title: model.name,
};

// TODO: Update to loop over mocks.json
export const DefaultSlice = () => ({
  components: {
    Slice,
    SliceZone,
  },
  data() {
    return {
      mock: (() => {
        const newMock = { ...mocks[0] };
        newMock.primary.title = customMocks[0].primary.title;
        newMock.primary.description = customMocks[0].primary.description;
        newMock.primary.ctaLink = customMocks[0].primary.ctaLink;
        newMock.primary.ctaButton = customMocks[0].primary.ctaButton;
        //newMock.primary.missing = customMocks[0].primary.missing;

        return newMock;
      })(),
      resolver() {
        return Slice;
      }
    };
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
});

DefaultSlice.storyName = mocks[0].name;
