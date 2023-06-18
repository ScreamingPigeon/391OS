## Checkpoint 1
## Processor Initialization

### GDT (Global Descriptor Table)


### IDT (Interrupt Descriptor Table)
IDT contains entries for exceptions, interrupts, and system calls. In IA-32 architecture, IDT has a total of 256 entries (range 0 to 255). 

Each exception, interrupt, and system call has a corresponding vector number (basically an index of the table) and a handler. 

The vectors 0 to 31 are reserved by the IA-32 architecture for architecture-defined exceptions and interrupts.

Exceptions are stored in the first 20 entries.

System call is stored at 0x80 (in hexadecimal).

User-defined interrupts are stored in the range 32 to 255 (in decimal).

### Paging


### Incomplete Device Driver

PIC (Programmable Interrupt Controller): 

Keyboard: this checkpoint only requires keypress to be shown on the screen.

RTC (Real Time Clock): this checkpoint only initializes RTC but does not have any usage.