import FrontpageController from './frontpage.controller';

const FrontpageComponent = {
  bindings: {
    data: '<'
  },
  controller: FrontpageController,
  template: require('./frontpage.template.html')
};

export default FrontpageComponent;
