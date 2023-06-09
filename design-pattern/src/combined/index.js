// 组合模式

// 第一级类
class FirstStage {
  constructor(menu) {
    this.menu = menu;
    this.list = []; // 用于存储子级
  }

  add(data) {
    this.list.push(data);
  }

  render() {
    if (this.menu !== "root") {
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      li.innerHTML = this.menu;
      var childUl = document.createElement("ul");
      li.appendChild(childUl);
      ul.appendChild(li);
      root.appendChild(ul);
    }

    // 开始渲染父级菜单
    console.log("开始渲第一级菜单", this.menu, this.list);
    this.list.forEach((i) => {
      i.render(childUl);
    });
  }
}

// 第二级类
class SecondStage {
  constructor(menu) {
    this.menu = menu;
    this.list = [];
  }

  add(data) {
    this.list.push(data);
  }

  render(childUl) {
    const li = document.createElement("li");
    li.innerHTML = this.menu;
    var childSubUl = document.createElement("ul");
    li.appendChild(childSubUl);
    childUl.appendChild(li);

    // 开始渲染子级菜单
    console.log("开始渲第二级菜单", this.menu, this.list);
    this.list.forEach((i) => {
      i.render(childSubUl);
    });
  }
}

// 第三级类
class ThirdStage {
  constructor(menu) {
    this.menu = menu;
  }

  // 开始渲染子孙级菜单
  render(childSubUl) {
    console.log("渲染第三级菜单", this.menu, childSubUl);
    const li = document.createElement("li");
    li.innerHTML = this.menu;
    childSubUl.appendChild(li);
  }
}

// 根
const rootMenu = new FirstStage("root");
// 子级
const menu1 = new FirstStage("菜单1");
const menu2 = new FirstStage("菜单2");
const menu3 = new FirstStage("菜单3");

// 子级的子级（孙子级）
const menu1_1 = new SecondStage("菜单1_1");
const menu1_2 = new SecondStage("菜单1_2");
const menu2_1 = new SecondStage("菜单2_1");
const menu2_2 = new SecondStage("菜单2_2");
const menu3_1 = new SecondStage("菜单3_1");
const menu3_2 = new SecondStage("菜单3_2");

// 创建孙子级
const menu1_1_1 = new ThirdStage("菜单1_1_1");
const menu1_2_1 = new ThirdStage("菜单1_2_1");
const menu2_1_1 = new ThirdStage("菜单2_1_1");
const menu2_2_1 = new ThirdStage("菜单2_2_1");
const menu3_1_1 = new ThirdStage("菜单3_1_1");
const menu3_1_2 = new ThirdStage("菜单3_1_2");
const menu3_2_1 = new ThirdStage("菜单3_2_1");
const menu3_2_2 = new ThirdStage("菜单3_2_2");

// 这里可以根据权限动态向根节点添加数据
rootMenu.add(menu1);
rootMenu.add(menu2);
rootMenu.add(menu3);

// 这里可以根据权限动态向父级中添加数据
menu1.add(menu1_1);
menu1.add(menu1_2);
menu2.add(menu2_1);
menu2.add(menu2_2);
menu3.add(menu3_1);
menu3.add(menu3_2);

// 这里可以根据权限动态向父级中添加子级
menu1_1.add(menu1_1_1);
menu1_2.add(menu1_2_1);
menu2_1.add(menu2_1_1);
menu2_2.add(menu2_2_1);
menu3_1.add(menu3_1_1);
menu3_1.add(menu3_1_2);
menu3_2.add(menu3_2_1);
menu3_2.add(menu3_2_2);

rootMenu.render();
