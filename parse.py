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
        self.effect = None

    def add_effect(self, effect):
        self.effect = effect

    def __repr__(self):
        return "FG_TRANSACTION_{0}: (date={1}, transaction_type={2}, effect={3})".format(self.tx_i, self.date, self.transaction_type, self.effect)

class Effect:
    def __init__(self, e_i, tx_i, edge_i, value, currency, is_credit):
        self.e_i = e_i
        self.tx_i = tx_i
        self.edge_i = edge_i
        self.currency = currency
        self.is_credit = int(is_credit)
        
        if self.is_credit == 1:
            self.value = value
        else:
            self.value = value * -1

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
                    print("tx_i " + row[1] + " edge_i != row[2]" + edge_i)
                if effect.currency != currency:
                    print("currency " + effect.currency + " currency != row[4] " + currency)
                if is_credit == 1:
                    effect.value += value
                else:
                    effect.value -= value
                fg_effects[tx_i] = effect
            else:
                fg_effects[tx_i] = Effect(e_i, tx_i, edge_i, value, currency, is_credit)

def fill_transactions_with_effects():
    for tx_i, fg_effect in fg_effects.items():
        # print("tx_i=" + str(tx_i))
        fg_transaction = fg_transactions[tx_i]
        fg_transaction.add_effect(fg_effect)

def write_nodes_to_csv(file):
    with open(file, 'w') as file:
        writer = csv.writer(file)
        header = ['node node_i', 'investment_class', 'ownership_type', 'investment_type']
        writer.writerow(header)

        for node_id in fg_nodes:
            print(fg_nodes[node_id])
            node = fg_nodes[node_id]
            data = [node.node_i, node.investment_class, node.ownership_type, node.investment_type]
            writer.writerow(data)
            #node.node_i 
            #node.investment_class 
            #node.ownership_type
            #node.investment_type

def write_transactions_to_csv(file):
    with open(file, 'w') as file:
        writer = csv.writer(file)
        header = ['tx_i', 'date', 'transaction_type', 'effect e_i','effect tx_i', 'effect edge_i', 'effect currency', 'effect is_credit']
        writer.writerow(header)
        
        for tx_i, fg_transaction in fg_transactions.items():
            effect = fg_transaction.effect
            data = [fg_transaction.tx_i, fg_transaction.date, fg_transaction.transaction_type, effect.e_i, effect.tx_i, effect.edge_i,effect.currency, effect.is_credit ]
            writer.writerow(data)
        
fg_nodes = {}
fg_edges = {}
fg_transactions = {}
fg_effects = {}

import_nodes("data/nodes.csv")
import_edges("data/edges.csv")
import_transactions("data/transactions.csv")
import_effects("data/transaction_effects.csv")

# List of fg_transactions
# Transaction From to Nodes

print(fg_nodes[1])
print(fg_edges[58])
print(fg_transactions[22])
print(fg_effects[1])

print ("Num Effects=" + str(len(fg_effects)))
#tx_id=22, edge_id=1, 
#transaction_effect_id = 20, 1434, 2410
fill_transactions_with_effects()
print(fg_transactions[22])

write_nodes_to_csv("parsed/nodes.csv")
write_transactions_to_csv("parsed/transactions.csv")

#run_transactions()