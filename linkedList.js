
function LinkedList(){
  let Node = function(element){//linked list內需要一個輔助類別node，表示要加入串列的項目
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function(element){//將node插入串列最後
    let node = new Node(element),
    current;

    if(head === null){//串列中的第一個節點
      head = node;
    }else{
      current = head;//從頭開始找尋串列最末位
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }
  this.insert = function(position,element){//在任意位置插入一個元素。
    if(position >=0 && position <- length){
      let node = new Node(element),
      current = head,
      previous,
      index = 0;

      if(position === 0){
        node.next = current;
        head = node;
      }else{
        while(index++ < position){
          previous = current.next;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    }else{
      return false;
    }
  }
  this.removeAt = function(position){//移除某個位置的元素
    if(position > -1 && position < length){
      let current = head,
      previous,
      index = 0;
      if(position === 0){
        head = current.next;
      }else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        previous.next = current.next;//這行極重要
      }
      length--;
      return current.element;
    }else{
      return null;
    }
  }
  this.remove = function(element){//從串列中移除一項
    // let current = head,
    // previous;
    // while(current){ 
    //   previous = current;
    //   if(element === current.element){
    //     previous.next = current.next;
    //     length--;
    //     break;
    //   }
    //   current = current.next;
    // }
    //有了indexof和removeAt方法就可以簡寫程如下：
    let indx = this.indexOf(element);
    this.removeAt(indx);
  }
  this.indexOf = function(element){//接受一個元素的值，如果存在串列中，就返回元素index，否則返回-1。
    let current = head,
    index = 0;
    while(current){
      if(element === current.element){
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  this.isEmpty = function(){//查詢串列是否為空
    return length === 0;
  }
  this.size = function(){//查詢串列大小
    return length;
  }
  this.toString = function(){//把linkedList物件轉成字串
    let current = head,
    string = '';
    while(current){
      string += current.element;
      current = current.next;
    }
    return string;
  }
  this.print = function(){

  }
}

let link = new LinkedList();
link.append(1);
link.append(2);
link.append(3);
link.append(4);
link.append(5);
link.append(6);
link.append(7);
link.append(8);
link.append(9);
link.append(10);


link.removeAt(4);
console.log(link.indexOf(4));
