import csv

class Node:
    def __init__(self, node_i, investment_class, ownership_type=None, investment_type=None):
        self.node_i = node_i
        self.investment_class = investment_class
        self.ownership_type = ownership_type
        self.investment_type = investment_type
    def __repr__(self):
        return "FG_NODE_{0}: (investment_class={1}, ownership_type={2}, investment_type={3})".format(self.node_i, self.investment_class, self.ownership_type, self.investment_type)


class Edge:
    def __init__(self, edge_i, start, end):
        self.edge_i = edge_i
        self.start = start
        self.end = end
        self.effects = []
    def add_txt(self, tx, effect):
        #TODO
        pass
        self.effects.append(effect)
    def __repr__(self):
        return "FG_EDGE_{0}: (from={1}, to={2})".format(self.edge_i, self.start, self.end)

class Transaction:
    def __init__(self, tx_i, date, transaction_type):
        self.tx_i = tx_i
        self.date = date
        self.transaction_type = transaction_type

    def add_effect(self):


    def __repr__(self):
        return "FG_TX_{0}: (date={1}, type={2})".format(self.tx_i, self.date, self.transaction_type)

class Effect:
    def __init__(self):
        pass

def import_nodes(file):
    with open(file, 'r') as file:
        reader = list(csv.reader(file))
        for i in range(1, len(reader)):
            row = reader[i]
            # this case doesn't have ownership type or investment type
            if row[1] == "PERSON_NODE" or row[1] == "GENERIC_COMPANY_GRAPH_NODE":
                fg_nodes[int(row[0])] = Node(row[0], row[1])
            else:
                fg_nodes[int(row[0])] = Node(row[0], row[1], row[4], row[5])

def import_edges(file):
    with open(file, 'r') as file:
        reader = list(csv.reader(file))
        for i in range(1, len(reader)):
            row = reader[i]
            fg_edges[int(row[0])] = Edge(int(row[0]), row[1], row[2])

def import_transactions(file):
    with open(file, 'r') as file:
        reader = list(csv.reader(file))
        for i in range(1, len(reader)):
            row = reader[i]
            fg_transactions[int(row[0])] = Transaction(int(row[0]), row[1], row[2])



fg_nodes = {}
fg_edges = {}
fg_transactions = {}

import_nodes("data/nodes.csv")
import_edges("data/edges.csv")
import_transactions("data/transactions.csv")
print(fg_nodes[1])
print(fg_edges[58])
print(fg_transactions[22])

