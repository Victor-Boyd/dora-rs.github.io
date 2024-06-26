# Logs

To access logs you can check the out folder:

```bash
cat out/<DATAFLOW_ID>/<NODE_ID>.txt
```

You can also use:

```bash
dora logs [DATAFLOW] <NODE>
```

The dataflow ID is optional.

An example command is the following:

```bash
dora logs webcam
```

This enables us to retrieve logs locally or from a remote machine.

We're not using any backend for archiving logs yet! We're closely watching opentelemetry so that in the futures, all data would be logged and archived on a universal format that can be used by many backend.

We are planning to improve the integration of logs with opentelemetry-logs and so this feature is still a bit experimental.

If you want to have a realtime feed of your logs, you can also use experimentally the following command:

```bash
watch -n 0.1 tail -n 20 /out/<DATAFLOW_ID>/<NODE_ID>.txt
```
