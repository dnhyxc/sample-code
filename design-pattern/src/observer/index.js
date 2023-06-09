/**
 * 观察者模式
 */

// 观察者
class Observer {
  constructor(name, fn = () => {}) {
    this.name = name;
    this.fn = fn;
  }
}

// 被观察者
class Subject {
  constructor(state) {
    this.state = {
      name: state.name || "",
      action: state.action || "",
    };
    this.observers = [];
  }

  // 设置状态
  setState(val) {
    this.state = { ...this.state, ...val };
    this.observers.forEach((i) => {
      i.fn(val);
    });
  }

  // 获取状态
  getState() {
    return this.state;
  }

  // 添加观察者
  addObserver(obs) {
    if (!this.observers.includes(obs)) {
      this.observers.push(obs);
    }
  }

  // 删除观察者
  delObserver(obs) {
    if (this.observers.includes(obs)) {
      this.observers = this.observers.filter((i) => i !== obs);
    }
  }

  // 清除所有观察者
  delAll() {
    this.observers = [];
  }
}

const snsn = new Observer("snsn", (data) => {
  console.log(`嘻嘻！snsn发现${data.name || "你"}${data.action || ""}了`);
});

const hmhm = new Observer("hmhm", (data) => {
  console.log(`哈哈！hmhm发现${data.name || "你"}${data.action || ""}了`);
});

const sub1 = new Subject({ name: "dnhyxc", action: "code" });
const sub2 = new Subject({ action: "code" });
sub1.addObserver(snsn);
sub1.addObserver(hmhm);
sub1.setState({ action: "看电影" });
sub1.setState({ name: "听音乐的dnhyxc" });

sub2.addObserver(snsn);
sub2.addObserver(hmhm);
sub2.setState({ action: "听音乐" });
console.log(sub1);
console.log(sub2);
sub2.delObserver(hmhm);
sub2.setState({ action: "听音乐" });
console.log(sub2);

sub1.delAll();
sub1.setState({ action: "发现不了了吧" });
const res = sub1.getState();
console.log(res);
console.log(sub1);
