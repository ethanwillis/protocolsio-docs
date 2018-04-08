# Step Component types
TODO

- Types
  - [Type 1 (Description)](#type-1-description)
  - [Type 3 (Amount)](#type-3-amount)
  - [Type 4 (Duration)](#type-4-duration)
  - [Type 6 (Title)](#type-6-title)
  - [Type 7 (Link)](#type-7-link)
  - [Type 8 (Software Package)](#type-8-software-package)
  - [Type 9 (Dataset Package)](#type-9-dataset-package)
  - [Type 13 (Comment)](#type-13-comment)
  - [Type 15 (Command Package)](#type-15-command-package)
  - [Type 17 (Expected Result)](#type-17-expected-result)
  - [Type 18 (Protocol)](#type-18-protocol)
  - [Type 19 (Safety Information)](#type-19-safety-information)
  - [Type 20 (Reagent)](#type-20-reagent)
  - [Type 21 (Step Cases)](#type-21-step-cases)
  - [Type 22 (Go To Previous Step)](#type-22-go-to-previous-step)
  - [Type 24 (Temperature)](#type-24-temperature)
  - [Type 25 (Concentration)](#type-25-concentration)
  - [Type 26 (Note)](#type-26-note)

### Type 1 (Description)
Description of a step. Can contain HTML tags.
| property | type | description |
|----|---|---|
| description | string | text/html |

### Type 3 (Amount)
A quantity of something, typically the total of a reagent, size, value etc.
| property | type | description |
|----|---|---|
| amount | integer | amount quantity. |
| unit | string | unit. |
| title | string | title of amount. |

### Type 4 (Duration)
| property | type | description |
|----|---|---|
| duration | integer | duration in milliseconds. |
| title of amount | string | title of amount. |

### Type 6 (Title)
| property | type | description |
|----|---|---|
| title | string | title of step. |

### Type 7 (Link)
| property | type | description |
|----|---|---|
| link | string | external url. |

### Type 8 (Software Package)
| property | type | description |
|----|---|---|
| name | string | name of software. |
| developer | string | developer of software. |
| repository | string | url or name of repository. |
| link | string | external url. |
| os_name | string | name of operating system. |
| os_version | string | version of operating system. |

### Type 9 (Dataset Package)
| property | type | description |
|----|---|---|
| name | string | name of software. |
| link | string | external url. |

### Type 13 (Comment)
Same as [Comment](../README.md#comment) object type

| property | type | description |
|----|---|---|
| id | integer | unique comment integer identifier. |
| parent_id | integer | id of parent comment. |
| title | string | title of comment. |
| body | string | body of comment. |
| created_on | integer | unix timestamp. date/time of comment creation. |
| changed_on | integer | unix timestamp. date/time when comment was modified last time. |
| creator | [User](../README.md#user) | comment creator. |
| comments | Array<[Comment](../README.md#comment)> | comment replies. |

### Type 15 (Command Package)
| property | type | description |
|----|---|---|
| name | string | name of software. |
| command | string | executable command. |
| os_name | string | name of operating system. |
| os_version | string | version of operating system. |

### Type 17 (Expected Result)
| property | type | description |
|----|---|---|
| body | string | body can contain html tags. |

### Type 18 (Protocol)
Same as [Protocol](../README.md#protocol) object type
| property | type | description |
|----|---|---|
| id | integer | unique protocol integer identifier. |
| title | string | protocol title. |
| image | [Image](../README.md#image) | protocol image. |
| doi | string | DOI of this protocol. |
| uri | string | unique protocol text identifier. |
| published_on | integer OR null | unix timestamp. date/time when this protocol was published. |
| created_on | integer | unix timestamp. date/time of protocol creation. |
| creator | [User](../README.md#user) | protocol creator |
| public | integer | 1 or 0. 1 means that this protocol is public and 0 otherwise. |
| versions | Array<[SmallProtocol](../README.md#small-protocol)> | list of versions |
| version_id | integer | 0...n. Version number of this protocol. |
| link | string | Link to this protocol. |
| number_of_steps | integer OR null | number of steps of this protocol. |
| authors | Array<[User](../README.md#user)> | list of user or empty array |
| steps | Array<[Step](../README.md#step)> | All of the steps in this protocol. |
| materials | Array<[Reagent](../README.md#reagent)> | Reagents required for this protocol. |

### Type 19 (Safety Information)
| property | type | description |
|----|---|---|
| body | string | body can contain html tags. |
| link | string | external url. |

### Type 20 (Reagent)
Same as [Reagent](../README.md#reagent) object type
| property | type | description |
|----|---|---|
| id | integer | unique reagent integer identifier. |
| mol_weight | number | molarity weight |
| name | string | name of reagent. |
| linfor | string | linear formula |
| url | string OR null | external url |
| sku | string | reagent sku. |
| vendor | [User](../README.md#user) | reagent vendor. |

### Type 21 (Step Cases)
| property | type | description |
|----|---|---|
| cases | Array<[Case](../README.md#case)> | list of case objects |

### Type 22 (Go To Previous Step)
| property | type | description |
|----|---|---|
| title | string | some text, usually explaining the reason to go to the previous step. |
| step_guid | string | linked step guid. |

### Type 24 (Temperature)
| property | type | description |
|----|---|---|
| temperature | integer | temperature value. |
| unit | string | unit. |
| title | string | title of component. |

### Type 25 (Concentration)
| property | type | description |
|----|---|---|
| concentration | integer | concentration value. |
| unit | string | unit. |
| title | string | title of concentration. |

### Type 26 (Note)
Same as [Comment](../README.md#comment) object type.
| property | type | description |
|----|---|---|
| id | integer | unique comment integer identifier. |
| parent_id | integer | id of parent comment. |
| title | string | title of comment. |
| body | string | body of comment. |
| created_on | integer | unix timestamp. date/time of comment creation. |
| changed_on | integer | unix timestamp. date/time when comment was modified last time. |
| creator | [User](../README.md#user) | comment creator. |
| comments | Array<[Comment](../README.md#comment)> | comment replies. |
