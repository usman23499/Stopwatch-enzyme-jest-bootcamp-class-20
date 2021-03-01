
import { shallow } from "enzyme"
import { mount } from "enzyme"
import Timer from "./Timer"

describe("Timer", () => {
  let container:any;

  beforeEach(() => (container = shallow(<Timer />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
  
})

describe('mounted Timer', () => {
  let container : any;

  beforeEach(() => (container = mount(<Timer />)));

  it('invokes startTimer when the start button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'startTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.start-timer').childAt(0).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('invokes stopTimer when the stop button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'stopTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.stop-timer').childAt(0).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('invokes resetTimer when the reset button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'resetTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.reset-timer').childAt(0).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should change isOn state true when the start button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.start-timer').childAt(0).simulate('click');
    expect(container.instance().state.isOn).toEqual(true);
  });
  it('should change isOn state false when the stop button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.stop-timer').childAt(0).simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
  });
  it('should change isOn state false when the reset button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.stop-timer').childAt(0).simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
    expect(container.instance().state.minutes).toEqual(30);
    expect(container.instance().state.seconds).toEqual(59);
 });
});