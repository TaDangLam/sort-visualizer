"use strict";
class sortAlgorithms {
    constructor(time) {
        this.list = document.querySelectorAll(".cell");
        this.size = this.list.length;
        this.time = time;
        this.help = new Helper(this.time, this.list);
    }

    

     MergeSort = async () => {
        await this.MergeDivider(0, this.size - 1);
        for (let counter = 0; counter < this.size; ++counter) {
          this.list[counter].setAttribute("class", "cell done");
        }
      };
      
       MergeDivider = async (start, end) => {
        if (start < end) {
          let mid = start + Math.floor((end - start) / 2);
          await this.MergeDivider(start, mid);
          await this.MergeDivider(mid + 1, end);
          await this.Merge(start, mid, end);
        }
      };
      
       Merge = async (start, mid, end) => {
        let newList = new Array();
        let frontcounter = start;
        let midcounter = mid + 1;
        while (frontcounter <= mid && midcounter <= end) {
          let fvalue = Number(this.list[frontcounter].getAttribute("value"));
          let svalue = Number(this.list[midcounter].getAttribute("value"));
          if (fvalue >= svalue) {
            newList.push(svalue);
            ++midcounter;
          } else {
            newList.push(fvalue);
            ++frontcounter;
          }
        }
        while (frontcounter <= mid) {
          newList.push(Number(this.list[frontcounter].getAttribute("value")));
          ++frontcounter;
        }
        while (midcounter <= end) {
          newList.push(Number(this.list[midcounter].getAttribute("value")));
          ++midcounter;
        }
      
        for (let c = start; c <= end; ++c) {
          this.list[c].setAttribute("class", "cell current");
        }
      
        for (let c = start, point = 0; c <= end && point < newList.length; ++c, ++point) {
          await this.help.pause();
      
          const value = Math.round(newList[point]); // Làm tròn giá trị số thập phân
          const height = `${4 * value}px`;
      
          this.list[c].setAttribute("value", value);
          this.list[c].style.height = height;
          this.list[c].innerText = value;
        }
      
        for (let c = start; c <= end; ++c) {
          this.list[c].setAttribute("class", "cell");
        }
      };
      
      

};