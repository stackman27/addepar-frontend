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
        pass

    def __repr__(self):
        return "FG_TRANSACTION_{0}: (date={1}, transaction_type={2})".format(self.tx_i, self.date, self.transaction_type)

class Effect:
    def __init__(self, e_i, tx_i, edge_i, value, currency, is_credit):
        self.e_i = e_i
        self.tx_i = tx_i
        self.edge_i = edge_i
        self.value = value
        self.currency = currency
        self.is_credit = is_credit
    def __repr__(self):
        return "FG_EFFECT_{0}: (tx_i={1}, edge_i={2}, value={3}, currency={4}, is_credit={5})".format(self.e_i, self.tx_i, self.edge_i, self.value, self.currency, self.is_credit)

def import_nodes(file):
    with open(file, 'r') as file:
        reader = list(csv.reader(file))
        for i in range(1, len(reader)):
            row = reader[i]
            # this case doesn't have ownership type or investment type
            node_i = int(row[0])
            if row[1] == "PERSON_NODE" or row[1] == "GENERIC_COMPANY_GRAPH_NODE":
                fg_nodes[node_i] = Node(node_i, row[1])
            else:
                fg_nodes[node_i] = Node(node_i, row[1], row[4], row[5])

def import_edges(file):
    with open(file, 'r') as file:
        reader = list(csv.reader(file))
        for i in range(1, len(reader)):
            row = reader[i]
            edge_i = int(row[0])
            fg_edges[edge_i] = Edge(edge_i, row[1], row[2])

def import_transactions(file):
    with open(file, 'r') as file:
        reader = list(csv.reader(file))
        for i in range(1, len(reader)):
            row = reader[i]
            tx_i = int(row[0])
            fg_transactions[tx_i] = Transaction(tx_i, row[1], row[2])

def import_effects(file):
    with open(file, 'r') as file:
        reader = list(csv.reader(file))
        for i in range(1, len(reader)):
            row = reader[i]
            e_i = int(row[0])
            tx_i = int(row[1])
            edge_i = int(row[2])
            value = float(row[3])
            currency = row[4]
            is_credit = int(row[5])

            if tx_i in fg_effects:
                effect = fg_effects[tx_i]
                if effect.edge_i != edge_i:
                    print("tx_i " + row[1] + " edge_i != row[2]" + row[2])
                if effect.currency != row[4]:
                    print("currency " + effect.currency + " currency != row[4]" + row[4])
                if effect.is_credit == 1:
                    effect.value += value
                else:
                    effect.value -= value
            else:
                fg_effects[tx_i] = Effect(e_i, tx_i, edge_i, value, currency, is_credit)

fg_nodes = {}
fg_edges = {}
fg_transactions = {}
fg_effects = {}

import_nodes("data/nodes.csv")
import_edges("data/edges.csv")
import_transactions("data/transactions.csv")
import_effects("data/transaction_effects.csv")

print(fg_nodes[1])
print(fg_edges[58])
print(fg_transactions[22])
print(fg_effects[1])

