import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { FlatNode } from 'src/app/interfaces/interface';

const TREE_DATA: FlatNode[] = [
  {
    name: 'Staff',
    expandable: true,
    level: 0,
  },
  {
    name: 'Marketing',
    expandable: true,
    level: 1,
  },
  {
    name: 'Sales',
    expandable: false,
    level: 2,
  },
  {
    name: 'Advertising',
    expandable: false,
    level: 2,
  },
  {
    name: 'Administration',
    expandable: true,
    level: 1,
  },
  {
    name: 'Finance',
    expandable: false,
    level: 2,
  },
  {
    name: 'HR',
    expandable: false,
    level: 2,
  },
  {
    name: 'Engineering',
    expandable: true,
    level: 1,
  },
  {
    name: 'Development',
    expandable: false,
    level: 2,
  },
  {
    name: 'QA',
    expandable: false,
    level: 2,
  },
  {
    name: 'Volunteers',
    expandable: true,
    level: 0,
  },
  {
    name: 'Harry',
    expandable: false,
    level: 1,
  },
  {
    name: 'Josie',
    expandable: false,
    level: 1,
  },
];

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: FlatNode) => node.expandable;

  getParentNode(node: FlatNode) {
    const nodeIndex = TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
      }
    }

    return null;
  }

  shouldRender(node: FlatNode) {
    let parent = this.getParentNode(node);

    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }

      parent = this.getParentNode(parent);
    }

    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
