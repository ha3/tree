import assert from 'assert';
import {
  getTreeFromAdjacencyList,
  getTreeFromAdjacencyListAndNodeMap,
} from '../src/adjacency-utils';
import {AdjacencyList} from '../src/interfaces/AdjacencyList';
import {NodeMap} from '../src/interfaces/NodeMap';

describe('Adjacency Unit Test', () => {
  it('test adjacency list', () => {
    const adjList: AdjacencyList = {
      1: ['2', '3', '4'],
      2: ['5', '6'],
      6: ['7', '8'],
    };

    const tree = getTreeFromAdjacencyList(adjList);
    const expectedTree = {
      node: '1',
      children: [
        {
          node: '2',
          children: [
            {node: '5'},
            {node: '6', children: [{node: '7'}, {node: '8'}]},
          ],
        },
        {node: '3'},
        {node: '4'},
      ],
    };
    assert.deepStrictEqual(tree, expectedTree);
  });

  it('test adjacency list with map', () => {
    const adjList: AdjacencyList = {
      1: ['2', '3', '4'],
      2: ['5', '6'],
      6: ['7', '8'],
    };
    const nodeMap = ([
      '',
      'lorem',
      'ipsum',
      'dolor',
      'sit',
      'amet',
      'consectetur',
      'adipiscing',
      'elit',
    ] as unknown) as NodeMap<string>;

    const tree = getTreeFromAdjacencyListAndNodeMap(adjList, nodeMap);
    const expectedTree = {
      node: 'lorem',
      children: [
        {
          node: 'ipsum',
          children: [
            {node: 'amet'},
            {
              node: 'consectetur',
              children: [{node: 'adipiscing'}, {node: 'elit'}],
            },
          ],
        },
        {node: 'dolor'},
        {node: 'sit'},
      ],
    };
    assert.deepStrictEqual(tree, expectedTree);
  });
});
